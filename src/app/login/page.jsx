'use client';
import Image from 'next/image';

const page = () => {
	const handleClick = async () => {
		const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
		const redirect_uri = 'http://localhost:3000/';
		const apiUrl = 'https://accounts.spotify.com/authorize';

		const scope = [
			'user-read-private',
			'user-read-email',
			'user-modify-playback-state',
			'user-read-playback-state',
			'user-read-currently-playing',
			'user-read-recently-played',
			'user-top-read'
		];
		window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirect_uri}&scope=${scope.join(
			' '
		)}&response_type=token&show_dialog=true`;
	};

	return (
		<div className='flex items-center justify-center flex-col w-[100vw] h-screen gap-20 bg-[#1db954]'>
			<div className='h-[20vh]'>
				<Image
					src={`https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png`}
					alt='spotify'
					width={380}
					height={380}
				/>
			</div>

			<button
				onClick={() => handleClick()}
				className='py-4 px-16 bg-black text-[#49f585] text-2xl rounded-3xl border-none cursor-pointer'
			>
				Connect Spotify
			</button>
		</div>
	);
};

export default page;
