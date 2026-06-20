import {
	Composition,
	Sequence,
	useCurrentFrame,
	interpolate,
	Easing,
} from 'remotion';

// Cena 1: Intro
const Scene1 = () => {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [0, 15], [0.5, 1], {
		easing: Easing.out(Easing.back(1.5)),
	});

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				background: 'linear-gradient(135deg, #dc143c 0%, #8b0000 100%)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
		>
			<div style={{ transform: `scale(${scale})`, fontSize: 80 }}>🔴</div>
			<div
				style={{
					fontSize: 72,
					fontWeight: 'bold',
					color: '#fff',
					letterSpacing: 4,
					textShadow: '0 4px 20px rgba(0,0,0,0.4)',
					transform: `scale(${scale})`,
					marginTop: 20,
				}}
			>
				COCA-COLA
			</div>
		</div>
	);
};

// Cena 2: Garrafa
const Scene2 = () => {
	const frame = useCurrentFrame() - 180;
	const rotation = interpolate(frame, [0, 60], [0, 360], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div style={{ transform: `rotateZ(${rotation}deg)`, fontSize: 150 }}>🔴</div>
		</div>
	);
};

// Cena 3: Texto
const Scene3 = () => {
	const frame = useCurrentFrame() - 360;
	const scale = interpolate(frame, [0, 10, 40, 60], [0.8, 1.2, 1.1, 0], {
		easing: Easing.out(Easing.bounce),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				background: 'linear-gradient(135deg, #DC143C 0%, #FF6B6B 100%)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
		>
			<div
				style={{
					fontSize: 54,
					fontWeight: 'bold',
					color: '#fff',
					transform: `scale(${scale})`,
					textAlign: 'center',
					letterSpacing: 3,
					textShadow: '0 4px 20px rgba(0,0,0,0.4)',
				}}
			>
				ABRA A<br />FELICIDADE
			</div>
		</div>
	);
};

// Cena 4: Bolhas
const Scene4 = () => {
	const frame = useCurrentFrame() - 540;

	const bubbles = Array.from({ length: 8 }).map((_, i) => {
		const delay = i * 8;
		const bubbleFrame = frame - delay;
		const y = interpolate(bubbleFrame, [0, 60], [0, -300], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});
		const scale = interpolate(bubbleFrame, [0, 30], [1, 0], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});

		return (
			<div
				key={i}
				style={{
					position: 'absolute',
					left: `${20 + i * 10}%`,
					bottom: '50%',
					width: 30,
					height: 30,
					borderRadius: '50%',
					background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(220,20,60,0.3))',
					border: '2px solid rgba(255,255,255,0.4)',
					transform: `translateY(${y}px) scale(${scale})`,
				}}
			/>
		);
	});

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				background: 'linear-gradient(135deg, #8b0000 0%, #DC143C 100%)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{bubbles}
			<div
				style={{
					fontSize: 48,
					fontWeight: 'bold',
					color: '#fff',
					letterSpacing: 2,
					zIndex: 10,
				}}
			>
				PURA ENERGIA!
			</div>
		</div>
	);
};

// Cena 5: CTA
const Scene5 = () => {
	const frame = useCurrentFrame() - 720;
	const scale = interpolate(frame, [0, 15], [0.5, 1], {
		easing: Easing.out(Easing.back(1.5)),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				background: 'linear-gradient(135deg, #DC143C 0%, #FF1744 100%)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					transform: `scale(${scale})`,
					padding: 30,
					borderRadius: 20,
					background: 'rgba(255,255,255,0.1)',
					border: '3px solid #fff',
					textAlign: 'center',
				}}
			>
				<div
					style={{
						fontSize: 48,
						fontWeight: 'bold',
						color: '#fff',
						margin: 0,
						letterSpacing: 4,
						marginBottom: 10,
					}}
				>
					COCA-COLA
				</div>
				<div style={{ fontSize: 24, color: '#fff', marginBottom: 10 }}>Taste the Feeling</div>
				<div style={{ fontSize: 20, color: 'rgba(255,255,255,0.9)' }}>🎉 Disponível em todo lugar!</div>
			</div>
		</div>
	);
};

// Composição Principal
const CokaColaAd = () => {
	return (
		<div>
			<Sequence from={0} durationInFrames={180}>
				<Scene1 />
			</Sequence>
			<Sequence from={180} durationInFrames={180}>
				<Scene2 />
			</Sequence>
			<Sequence from={360} durationInFrames={180}>
				<Scene3 />
			</Sequence>
			<Sequence from={540} durationInFrames={180}>
				<Scene4 />
			</Sequence>
			<Sequence from={720} durationInFrames={180}>
				<Scene5 />
			</Sequence>
		</div>
	);
};

export const RemotionRoot = () => {
	return (
		<Composition
			id="CocaColaAd"
			component={CokaColaAd}
			durationInFrames={900}
			fps={30}
			width={540}
			height={960}
		/>
	);
};
