import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Graphic} from './components/Graphic';

export const Post: React.FC<{
	background: any;
	image: any;
}> = ({background, image}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 25;

	return (
		<div style={{flex: 1, backgroundImage: `url(${background})`}}>
			<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
				<Graphic image={image} />
			</Sequence>
		</div>
	);
};
