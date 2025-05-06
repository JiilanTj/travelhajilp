import { PackageResponse } from '@/types/package';

const BASE_URL = 'https://api.grasindotravel.id/api';

class PackageService {
  async getPackages(): Promise<PackageResponse> {
    try {
      const response = await fetch(
        `${BASE_URL}/packages`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch packages');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching packages:', error);
      throw error;
    }
  }
}

export const packageService = new PackageService(); 