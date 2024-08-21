from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class TodoItem(BaseModel):
    id: int
    text: str
    user_id: str

todos = []

@app.post("/todos/")
def create_todo_item(todo: TodoItem):
    todos.append(todo)
    return todo

@app.get("/todos/{user_id}")
def get_todos(user_id: str):
    user_todos = [todo for todo in todos if todo.user_id == user_id]
    return user_todos

@app.delete("/todos/{todo_id}")
def delete_todo_item(todo_id: int):
    global todos
    todos = [todo for todo in todos if todo.id != todo_id]
    return {"message": "Todo deleted"}
