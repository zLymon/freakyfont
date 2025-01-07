import FreakFontConverter from '@/components/FreakFontConverter';

const AlphabetPreview = () => {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  const convertToFreakyFont = (input: string) => {
    return Array.from(input).map(c => {
      const charCode = c.charCodeAt(0);
      if (charCode >= 97 && charCode <= 122) {
        return String.fromCodePoint(120042 + charCode - 97);
      } else if (charCode >= 65 && charCode <= 90) {
        return String.fromCodePoint(119808 + charCode - 65);
      } else {
        return c;
      }
    }).join('');
  };

  return (
    <div className="bg-gray-800/50 rounded-lg p-4 mb-8">
      <h2 className="text-lg font-medium mb-3">Preview:</h2>
      <div className="grid gap-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          <span className="text-gray-400 min-w-16">Normal:</span>
          <span className="font-mono">{lowercase}</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          <span className="text-gray-400 min-w-16">Freaky:</span>
          <span>{convertToFreakyFont(lowercase)}</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          <span className="text-gray-400 min-w-16">Normal:</span>
          <span className="font-mono">{uppercase}</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          <span className="text-gray-400 min-w-16">Freaky:</span>
          <span>{convertToFreakyFont(uppercase)}</span>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Freaky Font Converter
        </h1>
        <p className="text-lg text-center mb-8">
          Transform your ordinary text into stunning freaky font styles instantly. Our freaky font generator 
          makes your text stand out with unique mathematical symbols and characters.
        </p>
        
        <AlphabetPreview />
        <FreakFontConverter />

        <div className="mt-8 text-center text-gray-300">
          <p>
            Our freaky font converter uses mathematical Unicode characters to create unique text styles.
            Perfect for social media, messaging, and anywhere you want your text to stand out!
          </p>
        </div>
      </main>
    </div>
  );
}
