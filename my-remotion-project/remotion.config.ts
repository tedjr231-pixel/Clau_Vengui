import { Config } from 'remotion';

Config.setPublicDir('./public');
Config.setFrameRange([0, 150]);
Config.setOutputLocation('./out/video.mp4');
Config.setConcurrency(4);
Config.setStudioPort(3000);
