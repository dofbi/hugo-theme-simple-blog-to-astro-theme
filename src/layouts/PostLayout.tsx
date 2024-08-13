import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { PostQuery, PostQueryVariables } from "tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

interface Props {
  tinaProps: {
    variables: PostQueryVariables;
    data: PostQuery;
    query: string;
  };
}

export default function PostLayout({ tinaProps }: Props) {
  const { data } = useTina({
    variables: tinaProps.variables,
    data: tinaProps.data,
    query: tinaProps.query,
  });

  const { post } = data;

  return (
    <main>
      <h1>{post.title}</h1>
      <TinaMarkdown content={post.body}></TinaMarkdown>
    </main>
  );
}
