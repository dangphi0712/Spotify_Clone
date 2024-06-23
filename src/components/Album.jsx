'use client';

import { baseUrl } from '@/constants';
import { useToken } from '@/context/TokenContext';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const Album = () => {
	const token = useToken();
	const spotify = new SpotifyWebApi();
	const [playlist, setPlaylist] = useState();

	useEffect(() => {
		spotify.setAccessToken(token);
		spotify.getMe().then(user => console.log('user:', user));
		spotify
			.getAlbum('6TnmFHbUYVfe4iuQjPQB2r')
			.then(playlists => setPlaylist(playlists));
	}, [token]);
	console.log(playlist);
	return (
		<div className='flex gap-6 flex-row flex-wrap'>
			<section className='flex max-w-full min-w-full flex-col min-h-[260px]'>
				<div className='flex items-center '>
					<div className=' flex-1'>
						<h2 className='font-bold text-base text-white'>
							Album phổ biến
						</h2>
					</div>

					<div className='text-[#b3b3b3] text-sm font-bold'>
						Hiện tất cả
					</div>
				</div>

				<div className='grid grid-cols-5 gap-4'>
					<div className='relative rounded-md cursor-pointer text-white'>
						<div className='w-90 h-90'>
							<img
								src={playlist.images[0].url}
								alt=''
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Album;
