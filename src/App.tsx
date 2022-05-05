interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button className="bg-violet-400 p-2">{props.text ?? 'Default'}</button>
}
function App() {
  return (
    <div>
      <Button text="Enviar" />
      <Button text="Ok" />
      <Button />
    </div>
  )
}

export default App
