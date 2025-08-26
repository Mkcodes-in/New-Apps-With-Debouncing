import React from 'react';
import '../App.css';
import { Loader2 } from 'lucide-react';

export default function Content({ article, loader }) {
  return (
    <section className="myfont max-w-7xl mx-auto py-26 px-4">
      {loader ? (
        <div className="text-center py-44">
          <Loader2 className='text-orange-600 animate-spin mx-auto' size={30} />
        </div>
      ) : article.length === 0 ? (
        <div className="text-2xl font-semibold text-gray-800 py-44 text-center">
          No result found ):
        </div>
      ) : (
        <div>
          <div className='text-2xl py-4'>
            Total result : <span className='text-orange-500 font-bold'>{article.length}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {article.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={item.urlToImage}
                  alt="article"
                />

                <div className="p-4 flex flex-col gap-2">
                  <h1 className="text-sm font-semibold text-gray-600">{item.author}</h1>
                  <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                  <p className="text-sm text-gray-700 line-clamp-3">{item.description}</p>
                  <div className="text-sm text-gray-500 line-clamp-2">{item.content}</div>

                  <a
                    href={item.url}
                    className="mt-4 inline-block bg-orange-400 hover:bg-orange-500 text-white text-sm font-medium py-2 px-4 rounded text-center transition-all duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>

  );
}
