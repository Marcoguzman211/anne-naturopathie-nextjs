import React from "react";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import htmlParser from "../utils/htmlParser";
import Image from "next/image";

export async function getStaticPaths() {
  // Fetch the IDs of all posts from the server
  const { data } = await client.query({
    query: gql`
      query {
        posts {
          edges {
            node {
              id
            }
          }
        }
      }
    `,
  });
  // Generate a path for each post ID
  const paths = data.posts.edges.map((post) => ({
    params: { id: post.node.id.toString() },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query ($id: ID!) {
        post(id: $id) {
          title
          content
        }
      }
    `,
    variables: { id: params.id },
  });
  return {
    props: {
      data,
    },
  };
}

const Post = ({ data }) => {
  //Ici, il faut traiter {data} pour afficher le contenu du post.
  console.log(data.post.content);
  const elementsArray = htmlParser(data.post.content);
  console.log(elementsArray);
  return (
    <div>
      <h3>{data.post.title}</h3>
      <div>
        {elementsArray.map((element, index) => {
          if (element.tag === "img") {
            return (
              <Image
                key={index}
                src={element.src}
                alt={element.alt}
                width={500}
                height={500}
              />
            );
          }
          return React.createElement(element.tag, { key: index }, element.text);
        })}
      </div>
    </div>
  );
};
export default Post;
