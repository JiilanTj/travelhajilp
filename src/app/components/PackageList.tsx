'use client';

import { useEffect, useState } from "react";
import { Package } from "@/types/package";
import { packageService } from "@/services/package";
import { Calendar, CheckCircle2, Hotel, Utensils, Plane, Bus, MapPin, PackageX } from "lucide-react";

const getFacilityIcon = (facility: string) => {
  const text = facility.toLowerCase();
  
  if (text.includes('hotel')) {
    return <Hotel className="w-5 h-5 text-green-600" />;
  }
  if (text.includes('makan') || text.includes('catering')) {
    return <Utensils className="w-5 h-5 text-green-600" />;
  }
  if (text.includes('pesawat') || text.includes('flight')) {
    return <Plane className="w-5 h-5 text-green-600" />;
  }
  if (text.includes('bus') || text.includes('transport') || text.includes('transportasi')) {
    return <Bus className="w-5 h-5 text-green-600" />;
  }
  if (text.includes('lokasi') || text.includes('dekat')) {
    return <MapPin className="w-5 h-5 text-green-600" />;
  }
  
  return <CheckCircle2 className="w-5 h-5 text-green-600" />;
};

export default function PackageList() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await packageService.getPackages();
        setPackages(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching packages:', err);
        setError('Failed to fetch packages');
        setIsLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const calculateDP = (price: string, dpPercentage: number) => {
    const numericPrice = parseInt(price);
    const dpAmount = (numericPrice * dpPercentage) / 100;
    return dpAmount;
  };

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-green-500 border-r-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-500">
        {error}
      </div>
    );
  }

  if (packages.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
          <PackageX className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Tidak Ada Paket Tersedia</h3>
        <p className="text-gray-500 max-w-md mx-auto">
          Mohon maaf, saat ini tidak ada paket yang tersedia. Silakan coba kembali beberapa saat lagi.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {packages.map((pkg) => (
        <div key={pkg.id} className="group bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 select-text relative overflow-hidden animate-[fadeUp_0.8s_ease-out_forwards] hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-6">
              {pkg.type}
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-gray-400 text-sm mb-1">Mulai dari</div>
              <div className="text-3xl font-bold text-gray-800">
                Rp {parseInt(pkg.price).toLocaleString('id-ID')}
              </div>
              <div className="text-gray-400 text-sm">Per Jamaah</div>
              <div className="mt-2 p-3 bg-green-50 rounded-lg">
                <div className="text-green-700 text-sm font-medium">DP {pkg.dp}%</div>
                <div className="text-green-800 font-semibold">
                  Rp {calculateDP(pkg.price, pkg.dp).toLocaleString('id-ID')}
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-green-600" />
                <span className="text-gray-600">{pkg.duration} Hari</span>
              </div>
              {pkg.facilities.map((facility, index) => (
                <div key={index} className="flex items-center gap-3">
                  {getFacilityIcon(facility)}
                  <span className="text-gray-600">{facility}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <a 
                href="https://portal.grasindotravel.id" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full group relative px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.5)] transition-all duration-300 text-center"
              >
                <span className="relative z-10 text-sm font-semibold">Daftar Sekarang</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="https://portal.grasindotravel.id" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full group relative px-6 py-3 rounded-xl border-2 border-green-500/20 text-green-600 hover:border-green-500/40 transition-all duration-300 text-center"
              >
                <span className="relative z-10 text-sm font-semibold">Lihat Detail</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 