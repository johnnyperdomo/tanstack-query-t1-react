import { usePost } from "./use-post";

function App() {
    const { data, isLoading } = usePost(2);

    return <>{isLoading ? "Content is loading" : JSON.stringify(data)}</>;
}

export default App;
