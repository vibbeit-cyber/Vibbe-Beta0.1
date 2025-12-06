from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import mysql.connector
from mysql.connector import Error
import os
from dotenv import load_dotenv

# Load .env if present
load_dotenv()

# --- DB CONFIG (change to your actual values) ---
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_USER = os.getenv("DB_USER", "root")
DB_PASSWORD = os.getenv("DB_PASSWORD", "your_password_here")
DB_NAME = os.getenv("DB_NAME", "vibbe_beta")

# --- FastAPI app ---
app = FastAPI()

# --- CORS (allow React dev server) ---
origins = [
    "http://localhost:5173",  # Vite default
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- Pydantic model for incoming data ---
class BetaSignupIn(BaseModel):
    email: EmailStr


# --- Helper: get DB connection ---
def get_connection():
    try:
        conn = mysql.connector.connect(
            host=DB_HOST,
            user=DB_USER,
            password=DB_PASSWORD,
            database=DB_NAME,
        )
        return conn
    except Error as e:
        print("Error connecting to MySQL:", e)
        raise


# --- Endpoint: save email ---
@app.post("/api/beta-signups")
def create_beta_signup(payload: BetaSignupIn):
    conn = None
    try:
        conn = get_connection()
        cursor = conn.cursor()

        # Insert email into table
        insert_query = """
        INSERT INTO beta_signups (email)
        VALUES (%s)
        """
        cursor.execute(insert_query, (payload.email,))
        conn.commit()

        new_id = cursor.lastrowid  # S.No / Primary Key

        return {
            "id": new_id,
            "email": payload.email,
            "message": "Beta signup saved successfully",
        }

    except Error as db_err:
        # Handle duplicate emails or DB errors
        print("DB Error:", db_err)
        raise HTTPException(status_code=400, detail="Could not save email (maybe already registered).")
    finally:
        if conn:
            conn.close()


# (Optional) GET endpoint to list signups (for testing)
@app.get("/api/beta-signups")
def list_beta_signups():
    conn = None
    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT id, email, created_at FROM beta_signups ORDER BY id DESC")
        rows = cursor.fetchall()
        return rows
    except Error as db_err:
        print("DB Error:", db_err)
        raise HTTPException(status_code=500, detail="Error reading from database.")
    finally:
        if conn:
            conn.close()