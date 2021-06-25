import http from 'http'
import express from 'express'
import routes from './routes'

const app = express()

app.use(express.json());
app.use(routes)

app.use((req, res) => {
	const { status, message } = err; console.err(err);
	res.status(status || 500).json({ message })
})

const server = http.createServer(app);

const PORT = process.env.PORT 

const start = async () => {
  try {
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}.`));
  } catch (err) {
    console.error(err);
  } finally {
    // await prisma.$disconnect();
  }
};

start();
