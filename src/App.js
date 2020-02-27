import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';

import ReactAudioPlayer from 'react-audio-player';
import musicConfig from './Music/config.json'
import { Layout, Menu, Breadcrumb, Icon, Tooltip } from 'antd';


function App() {
	const { SubMenu } = Menu;
	const { Header, Content, Sider } = Layout;

	const [track, setTrack] = useState("");
	const [musicID, setMusicID] = useState("2_1.wav");

	//check tips length
	musicConfig.ListeningGuide.map((s) => {
		if (s.Tips.Nodes.length != s.Tips.Descriptions.length) {
			console.assert(s);
		}
	})


	return (
		<Layout>
			<Header className="header">
				<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['1']}
					style={{ lineHeight: '64px' }}
				>
					<Menu.Item key="1">音乐</Menu.Item>
					<Menu.Item key="2">艺术</Menu.Item>
					<Menu.Item key="3">其他</Menu.Item>
				</Menu>
			</Header>
			<Layout>
				<Sider width={200} style={{ background: '#fff' }}>
					<Menu
						mode="inline"
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['ListeningGuide']}
						style={{ height: '100%', borderRight: 0 }}
						onClick={(item) => {
							//change music
							let k = parseInt(item.key);
							let trackName = musicConfig.ListeningGuide[k].Track;
							setTrack(require("./Music/" + trackName));

							//change info
							
						}}
					>
						<SubMenu
							key="ListeningGuide"
							title={
								<span>
									ListeningGuide
              					</span>
							}
						>
							{musicConfig.ListeningGuide.map((s) =>
								<Menu.Item
									key={s.Key}
								>
									{s.Name}
								</Menu.Item>
							)}
						</SubMenu>
						<SubMenu
							key="ListeningExercise"
							title={
								<span>
									ListeningExercise
              					</span>
							}
						>
							{musicConfig.ListeningExercise.map((s) =>
								<Menu.Item key={s.Track}>{s.Name}</Menu.Item>
							)}
						</ SubMenu>
					</Menu>
				</Sider>
				<Layout style={{ padding: '0 24px 24px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>每一个不曾起舞的日子都是对生命的辜负，开始奇妙的音乐之旅吧~</Breadcrumb.Item>
					</Breadcrumb>
					<Content
						style={{
							background: '#fff',
							padding: 24,
							margin: 0,
							minHeight: 280,
						}}
					>
						<ReactAudioPlayer
							src={track}
							controls
						/>
					</Content>
				</Layout>
			</Layout>
		</Layout>


	);
}

export default App;


// const myaudio = new Audio(music)
// myaudio.play();
// myaudio.loop = true;