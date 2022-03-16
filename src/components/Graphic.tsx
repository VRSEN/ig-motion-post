export const Graphic: React.FC<{
	image: any;
}> = ({image}) => {
	return (
		<div
			style={{
				position: 'absolute',
				top: '19%',
				left: '27%',
			}}
		>
			<img src={image} alt="Svg motion image" style={{width: '150%'}} />
		</div>
	);
};
