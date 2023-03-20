import { version } from '../../package.json';

export default function Home() {
  const getPermission = async () => {
    const result = await Notification.requestPermission();

    if (result === 'granted') {
      console.log('SHOW');
    } else {
      console.log(`getPermission [${result}]`);
    }
  };

  return (
    <div>
      <div>Calendar</div>
      <div>{`v${version}`}</div>
      <button onClick={getPermission}>
        Show Notifications
      </button>
    </div>
  );
}
