/* 'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-8 bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Brza statistika</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        <div>
          <p className="text-5xl font-bold text-blue-500">
            {isInView ? <CountUp end={20} duration={2} suffix="+" /> : '0'}
          </p>
          <p className="text-gray-400">Završenih projekata</p>
        </div>
        <div>
          <p className="text-5xl font-bold text-green-500">
            {isInView ? <CountUp end={15} duration={2} /> : '0'}
          </p>
          <p className="text-gray-400">Zadovoljnih klijenata</p>
        </div>
        <div>
          <p className="text-5xl font-bold text-yellow-500">
            {isInView ? <CountUp end={3} duration={2} /> : '0'}
          </p>
          <p className="text-gray-400">Godine iskustva</p>
        </div>
        <div>
          <p className="text-5xl font-bold text-pink-500">
            {isInView ? <CountUp end={100} duration={2} suffix="%" /> : '0'}
          </p>
          <p className="text-gray-400">Zadovoljstvo klijenata</p>
        </div>
      </div>
    </section>
  );
}
 */

'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function StatsSection() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 px-8 bg-gray-950 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Brza statistika</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-5xl font-bold text-blue-500">
            {inView ? <CountUp end={20} duration={2} /> : '0'}+
          </p>
          <p className="text-gray-400">Završenih projekata</p>
        </div>
        <div>
          <p className="text-5xl font-bold text-green-500">
            {inView ? <CountUp end={5} duration={4} /> : '0'}
          </p>
          <p className="text-gray-400">Zadovoljnih klijenata</p>
        </div>
        <div>
          <p className="text-5xl font-bold text-yellow-500">
            {inView ? <CountUp end={3} duration={4} /> : '0'}
          </p>
          <p className="text-gray-400">Godine iskustva</p>
        </div>
        <div>
          <p className="text-5xl font-bold text-pink-500">
            {inView ? <CountUp end={100} duration={2} suffix="%" /> : '0%'}
          </p>
          <p className="text-gray-400">Zadovoljstvo klijenata</p>
        </div>
      </div>
    </section>
  );
}
