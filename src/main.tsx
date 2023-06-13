import ReactDOM from 'react-dom/client';

export default function main() {
  const container = document.getElementById('root');

  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);

  root.render((
    <div>
      Hello, world!
    </div>
  ));
}

main();
