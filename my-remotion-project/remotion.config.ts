import { Config } from '@remotion/cli/config';

Config.setPublicDir('./public');
Config.setFrameRange([0, 900]);
Config.setOutputLocation('./out/coca-cola-ad.mp4');
Config.setConcurrency(4);
Config.setStudioPort(3000);
