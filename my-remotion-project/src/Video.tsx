import { useState } from 'react';
import {
	Composition,
	Img,
	Sequence,
	Video,
	Audio,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

const MyComposition = () => {
	const frame = useCurrentFrame();
	const { durationInFrames, fps } = useVideoConfig();

	return (
		<div style={styles.container}>
			<div
				style={{
					...styles.box,
					transform: `translateX(${(frame / durationInFrames) * 100}px)`,
					opacity: Math.sin((frame / fps) * Math.PI) * 0.5 + 0.5,
				}}
			>
				<h1 style={styles.title}>
					Remotion Video 🎬
				</h1>
				<p style={styles.subtitle}>
					Frame {frame} of {durationInFrames}
				</p>
			</div>
		</div>
	);
};

const styles: Record<string, React.CSSProperties> = {
	container: {
		flex: 1,
		backgroundColor: '#0f0f0f',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 100,
		color: '#fff',
		display: 'flex',
		height: '100%',
	},
	box: {
		backgroundColor: '#1a1a2e',
		padding: '40px',
		borderRadius: '10px',
		textAlign: 'center',
		boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
	},
	title: {
		margin: '0 0 20px 0',
		fontSize: '48px',
		fontWeight: 'bold',
	},
	subtitle: {
		margin: 0,
		fontSize: '24px',
		opacity: 0.8,
	},
};

export const RemotionRoot = () => {
	return (
		<Composition
			id="MyComposition"
			component={MyComposition}
			durationInFrames={150}
			fps={30}
			width={1280}
			height={720}
			defaultProps={{}}
		/>
	);
};
