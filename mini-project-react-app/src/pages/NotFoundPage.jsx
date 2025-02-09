const imgURL =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2Fa45e05cae2a06e6edb9a0d2d6ed632bb%2Ftenor.gif%3Fitemid%3D12587594&f=1&nofb=1&ipt=15d6a7b9402e087ba00ad0ef3b162d0ff4837daac7a39dac05f026976c5d7675&ipo=images";

export default function NotFoundPage() {
  return (
    <div>
      <h1>404</h1>
      <img src={imgURL} alt="404 error gif" />
    </div>
  )
}
