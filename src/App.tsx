import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function App() {
  const result = useQuery({
    queryKey: ["Posts"],
    queryFn: async function () {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");

      return data.json();
    },
  });

  if (result.isPending) {
    return <h1>Loading</h1>;
  }

  return (
    <ul>
      {result.data?.map((item: any) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
