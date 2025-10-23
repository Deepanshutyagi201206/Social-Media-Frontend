import { RichTextEditor } from "react-rich-text-editor-js";
import styles from "./style.module.css";
import { useState } from "react";
import { postRequest } from "../../apiRequest";
const AddPost = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleClickOnSubmit = async () => {
    try {
      const body = { content: editorContent };
      const res: unknown = await postRequest("post", body);

      console.log(res);
    } catch (err: unknown) {
      console.log(err);
    }
  };

  return (
    <div className={styles.body}>
      <RichTextEditor
        editorContent={editorContent}
        setEditorContent={setEditorContent}
      />
      <button onClick={handleClickOnSubmit}>Submit</button>
    </div>
  );
};

export default AddPost;
