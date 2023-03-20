import { version } from '../../package.json';

export default function Home() {
  return (
    <>
      <div>Calendar</div>
      <div>{`v${version}`}</div>
    </>
  );
}
