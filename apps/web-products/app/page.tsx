import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Microfrontend - Productos</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Bienvenido a la plataforma de productos. Aquí podrás explorar todos los productos disponibles.
      </p>

      <Link
        href="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Ver productos
      </Link>
    </main>
  );
}
