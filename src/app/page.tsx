import { TodoProvider } from "@/components/todos/TodoContext";
import TodoWrapper from "@/components/todos/TodoWrapper";

export default function Home() {
  return (
    <main>
      <TodoProvider>
        <TodoWrapper />
      </TodoProvider>
    </main>
  );
}
