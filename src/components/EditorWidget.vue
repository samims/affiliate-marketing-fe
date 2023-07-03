<template>
    <div ref="editor" class="medium-editor"></div>
  </template>
  
  <script>
  import MediumEditor from 'medium-editor';
  
  export default {
    mounted() {
      const editor = new MediumEditor(this.$refs.editor, {
        // Configuration options for Medium Editor
        // For example:
        placeholder: {
          text: 'Write your content...',
        },
      });
  
      // Emit an event whenever the content changes
      editor.subscribe('editableInput', () => {
        const content = editor.getContent();
        this.$emit('content-change', content);
      });
    },
  };
  </script>
  
  <style>
  .medium-editor {
    border: 1px solid #ccc;
    padding: 10px;
  }
  </style>
  