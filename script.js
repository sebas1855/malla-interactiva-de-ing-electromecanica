body {
  font-family: sans-serif;
  background-color: #f0f0f0;
  text-align: center;
  padding: 20px;
}

h1 {
  margin-bottom: 30px;
  color: #222;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.semestre {
  border-radius: 10px;
  color: white;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  text-align: left;
}

.semestre:hover {
  transform: scale(1.03);
}

.rojo { background-color: #e74c3c; }
.azul { background-color: #2980b9; }
.blanco { background-color: #ecf0f1; color: #333; }

.materias {
  display: none;
  margin-top: 10px;
  padding-left: 15px;
  font-size: 0.95em;
}

.materias ul {
  padding-left: 20px;
}

