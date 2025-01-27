'use client';
import { Html5Qrcode } from 'html5-qrcode';
import {Html5QrcodeScanner} from "html5-qrcode";
import { abi } from './constants/abi';
import { useReadContract } from 'wagmi';
import { useQueryClient } from '@tanstack/react-query';
const contractAddress = '0x173EA2dAc8533896F86b97A95636E8775E363EEe';

<script src="https://unpkg.com/html5-qrcode" type="text/javascript"></script>
export default function Page() {
  return (
    <div className="flex w-96 flex-col md:w-[600px]">
      <section className="mb-6 flex w-full flex-col border-b border-sky-800 pb-6">
        <aside className="mb-6 flex">
          <h2 className="text-2xl">Welcome to our Event!</h2>
        </aside>
        <main className="flex flex-col space-x-4">
          <p className="text-body mb-4 text-white">
            Please scan the QR code for your wallet address that holds the NFT.
                 </p>
        </main>
      </section>
    </div>
  );
}
