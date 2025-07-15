body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  text-align: center;
  padding: 20px;
}

h1 {
  color: #333;
  margin-bottom: 30px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  max-width: 1200px;
  margin: 0 auto;
}

.semestre {
  padding: 15px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
  text-align: left;
}

.semestre:hover {
  transform: scale(1.02);
}

.rojo { background-color: #e74c3c; }
.azul { background-color: #2980b9; }
.blanco { background-color: #ecf0f1; color: #333; }

.materias {
  display: none;
  margin-top: 10px;
  padding-left: 10px;
}

.materias ul {
  list-style: disc;
  padding-left: 20px;
}

