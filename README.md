# Secure Note

A lightweight secure note application built in React.

## Setting Up

```bash
git clone https://github.com/ashramwen/secure-note.git
yarn
yarn start
```

## **Features**

- Pure React notes
- Markdown language support
- Markdown format rendering
- Note content Encrypting/Decrypting
- Inline content editable
- Unit tests including

## Flowchart

![flowchart](https://github.com/ashramwen/secure-note/blob/main/flowchart.png)

## Introduction

### New note

1. Clicking **_New note_** button on the left top of screen will turn the right pane into **Edit mode**
2. In **Edit mode**, users are able to write their notes on the right pane

### View mode

1. Clicking an existent note on the left side will select the note and turn the right pane into **View mode**
2. The content of the selected note will be decrypted and markdown-formatted
3. Users can read the title and the markdown-formatted content on the right pane
4. Users can click the **_Edit_** button in the right bottom and turn the right pane into **Edit mode**

### Edit mode

1. On the top of the right pane is an input of title, and the middle is a textarea of content that supports markdown language
2. There is a function zone in the bottom including two or three buttons, **_Cancel,_** **_Save_** and **_Delete_**
   - **_Cancel_** button: Clicking this button will let this application go back to **View mode** (or empty if creating a new note)
   - **_Save_** button: The content will be encrypted, and the title and encrypted content that users wrote in will be saved (If the title stays empty, it will become `Untitled`)
   - **_Delete_** button: After clicking this button, a deletion confirmation will show up to ask for deleting the selected note (Only appearing when users select an existent note)

## Project structure

```
src
├── __mocks__                 // mock data
├── common                    // common or shared components (including styled components)
│   ├── Box                   // a basic box (div)
│   ├── Button                // a functional button
│   ├── Divider               // a divider line
│   ├── Flex                  // a flexbox inheriting box (div)
│   ├── RoundedButton         // a rounded button
│   ├── Spinner               // a rotating spinner
│   └── TitleHighlight        // a title highlighter
│
├── components                // components
│   └── SecureNotes           // SecureNotes component
│       └── components        // child components
│           ├── Confirmation  // the deletion confirmation modal
│           ├── EditPanel     // the panel of edit mode
│           ├── NoteList      // the note list component
│           ├── RightPane     // the right pane including edit and view mode panels
│           └── ViewPanel     // the panel of view mode
│
├── context                   // including context and reducer
├── styles                    // global styles
├── svg                       // svg files
└── utils                     // utilities of encrypting, decrypting, and so on
```

## Available Scripts

```sh
yarn start
```

Runs the app in the development mode.

```sh
yarn test
```

Launches the test runner in the interactive watch mode.

```sh
yarn build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br />
