import {Composition} from 'remotion';
import {Post} from './Post';
import background from '/assets/bgs/ru/bg1-w-text.png';
import image from '/assets/svg/hero-animated.svg';

export const RemotionVideo: React.FC = () => {
	const fps = 15;
	const seconds = 10;
	return (
		<>
			<Composition
				id="Post"
				component={Post}
				durationInFrames={fps * seconds}
				fps={fps}
				width={1080}
				height={1080}
				defaultProps={{
					background,
					image,
				}}
			/>
		</>
	);
};
