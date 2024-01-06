import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "NoteBrain - Notes",
};

const NotesPage = (props: Props) => {
  return <div>Here will be your notes!</div>;
};

export default NotesPage;
