# Modal Plugin

A simple and customizable React modal component.

## 📦 Installation

To install the package, run the following command:

```sh
npm install @mattbass93/modal_plugin
```

## 🚀 Usage

For a React App:

```jsx
import Modal from "@mattbass93/modal_plugin";

function App() {
  return (
    <Modal isOpen={true} onClose={() => console.log("Closed")}>
      <h2>Hello, World!</h2>
      <p>This is a simple modal component.</p>
    </Modal>
  );
}

export default App;
```

## ⚙️ Props

| Prop       | Type       | Description                                | Required |
|------------|-----------|--------------------------------------------|----------|
| `isOpen`   | `Boolean`  | Controls whether the modal is visible     | ✅ Yes   |
| `onClose`  | `Function` | Function triggered when modal closes      | ✅ Yes   |
| `children` | `ReactNode` | Content inside the modal                 | ✅ Yes   |

## 🔧 Node.js Version

This package requires **Node.js 16 or later** to function properly.

## 📝 License

This project is licensed under the **MIT License**.



