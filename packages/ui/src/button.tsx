// Add proper TypeScript types and fix className syntax
interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => (
  <button className="px-4 py-2 bg-blue-600 text-white rounded">
    {children}
  </button>
);