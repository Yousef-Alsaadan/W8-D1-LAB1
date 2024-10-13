dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/", userRoutes);

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");
}

main().catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
