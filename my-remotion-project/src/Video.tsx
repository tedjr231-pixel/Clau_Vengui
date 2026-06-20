import {
	Composition,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
	interpolate,
	Easing,
} from 'remotion';

// Cena 1: Intro com efeito
const IntroScene = () => {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [0, 15], [0.5, 1], {
		easing: Easing.out(Easing.back(1.5)),
	});
	const opacity = interpolate(frame, [0, 10], [0, 1]);

	return (
		<div style={{ ...styles.container, overflow: 'hidden' }}>
			{/* Fundo gradiente */}
			<div
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					background: 'linear-gradient(135deg, #dc143c 0%, #8b0000 100%)',
				}}
			/>
			{/* Efeitos de luz */}
			<div
				style={{
					position: 'absolute',
					width: '200px',
					height: '200px',
					background: 'radial-gradient(circle, rgba(255,255,255,0.3), transparent)',
					borderRadius: '50%',
					top: '-50px',
					left: '-50px',
				}}
			/>
			{/* Texto principal */}
			<div
				style={{
					...styles.centerContent,
					opacity,
					transform: `scale(${scale})`,
				}}
			>
				<div style={styles.cocaLogoText}>🔴</div>
				<h1 style={styles.mainTitle}>COCA-COLA</h1>
			</div>
		</div>
	);
};

// Cena 2: Garrafa com animação
const BottleScene = () => {
	const frame = useCurrentFrame();
	const localFrame = frame - 90;
	const rotation = interpolate(localFrame, [0, 60], [0, 360], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const scale = interpolate(localFrame, [0, 30], [0.3, 1], {
		easing: Easing.out(Easing.expo),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity = interpolate(localFrame, [0, 10], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div style={{ ...styles.container, background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)' }}>
			<div
				style={{
					...styles.centerContent,
					opacity,
					transform: `scale(${scale}) rotateZ(${rotation}deg)`,
				}}
			>
				{/* Garrafa estilizada */}
				<div
					style={{
						position: 'relative',
						width: '80px',
						height: '180px',
					}}
				>
					{/* Gargalo */}
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: '50%',
							transform: 'translateX(-50%)',
							width: '30px',
							height: '20px',
							background: '#DC143C',
							borderRadius: '0 0 8px 8px',
						}}
					/>
					{/* Corpo da garrafa */}
					<div
						style={{
							position: 'absolute',
							top: '20px',
							left: '50%',
							transform: 'translateX(-50%)',
							width: '70px',
							height: '150px',
							background: '#DC143C',
							borderRadius: '15px 15px 20px 20px',
							boxShadow: '0 0 30px rgba(220, 20, 60, 0.6)',
						}}
					/>
					{/* Brilho */}
					<div
						style={{
							position: 'absolute',
							top: '30px',
							left: '55%',
							width: '12px',
							height: '100px',
							background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
							borderRadius: '50%',
						}}
					/>
				</div>
			</div>
		</div>
	);
};

// Cena 3: Texto com ritmo
const TextScene = () => {
	const frame = useCurrentFrame();
	const localFrame = frame - 180;
	const textScale = interpolate(
		localFrame,
		[0, 10, 40, 60],
		[0.8, 1.2, 1.1, 0],
		{
			easing: Easing.out(Easing.bounce),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const opacity = interpolate(localFrame, [0, 5, 50, 60], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				...styles.container,
				background: 'linear-gradient(135deg, #DC143C 0%, #FF6B6B 100%)',
			}}
		>
			<div style={{ ...styles.centerContent, opacity }}>
				<h2
					style={{
						...styles.slogan,
						transform: `scale(${textScale})`,
						textShadow: '0 4px 20px rgba(0,0,0,0.4)',
					}}
				>
					ABRA A FELICIDADE
				</h2>
				<p
					style={{
						fontSize: '28px',
						color: '#fff',
						marginTop: '20px',
						fontWeight: '300',
						letterSpacing: '2px',
					}}
				>
					✨ REFRESCANTE ✨
				</p>
			</div>
		</div>
	);
};

// Cena 4: Efeito de gás/bolhas
const BubblesScene = () => {
	const frame = useCurrentFrame();
	const localFrame = frame - 270;

	const bubbles = Array.from({ length: 8 }).map((_, i) => {
		const delay = i * 8;
		const bubbleFrame = localFrame - delay;
		const y = interpolate(bubbleFrame, [0, 60], [0, -300], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});
		const scale = interpolate(bubbleFrame, [0, 30], [1, 0], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});
		const opacity = interpolate(bubbleFrame, [0, 40, 60], [1, 0.8, 0], {
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
					width: '30px',
					height: '30px',
					borderRadius: '50%',
					background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(220,20,60,0.3))',
					border: '2px solid rgba(255,255,255,0.4)',
					transform: `translateY(${y}px) scale(${scale})`,
					opacity,
				}}
			/>
		);
	});

	return (
		<div
			style={{
				...styles.container,
				background: 'linear-gradient(135deg, #8b0000 0%, #DC143C 100%)',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{bubbles}
			<div style={styles.centerContent}>
				<h2 style={styles.slogan}>PURA ENERGIA!</h2>
			</div>
		</div>
	);
};

// Cena 5: Call to Action
const CTAScene = () => {
	const frame = useCurrentFrame();
	const localFrame = frame - 360;
	const scale = interpolate(localFrame, [0, 15], [0.5, 1], {
		easing: Easing.out(Easing.back(1.5)),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity = interpolate(localFrame, [0, 10, 50, 60], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				...styles.container,
				background: 'linear-gradient(135deg, #DC143C 0%, #FF1744 100%)',
			}}
		>
			<div style={{ ...styles.centerContent, opacity }}>
				<div
					style={{
						transform: `scale(${scale})`,
						padding: '30px',
						borderRadius: '20px',
						background: 'rgba(255,255,255,0.1)',
						border: '3px solid #fff',
					}}
				>
					<h1 style={{ ...styles.mainTitle, margin: '0 0 10px 0', fontSize: '48px' }}>
						COCA-COLA
					</h1>
					<p style={{ fontSize: '24px', color: '#fff', margin: '10px 0', fontWeight: 'bold' }}>
						Taste the Feeling
					</p>
					<p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.9)', margin: '5px 0 0 0' }}>
						🎉 Disponível em todo lugar!
					</p>
				</div>
			</div>
		</div>
	);
};

// Composição principal
const CokaColaAd = () => {
	return (
		<div>
			<Sequence from={0} durationInFrames={90}>
				<IntroScene />
			</Sequence>
			<Sequence from={90} durationInFrames={90}>
				<BottleScene />
			</Sequence>
			<Sequence from={180} durationInFrames={90}>
				<TextScene />
			</Sequence>
			<Sequence from={270} durationInFrames={90}>
				<BubblesScene />
			</Sequence>
			<Sequence from={360} durationInFrames={60}>
				<CTAScene />
			</Sequence>
		</div>
	);
};

const styles: Record<string, React.CSSProperties> = {
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
	},
	centerContent: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		zIndex: 10,
	},
	cocaLogoText: {
		fontSize: '80px',
		marginBottom: '20px',
		filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))',
	},
	mainTitle: {
		fontSize: '72px',
		fontWeight: 'bold',
		color: '#fff',
		margin: 0,
		letterSpacing: '4px',
		textShadow: '0 4px 20px rgba(0,0,0,0.4)',
	},
	slogan: {
		fontSize: '54px',
		fontWeight: 'bold',
		color: '#fff',
		margin: 0,
		letterSpacing: '3px',
		textShadow: '0 4px 20px rgba(0,0,0,0.3)',
	},
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
			defaultProps={{}}
		/>
	);
};
