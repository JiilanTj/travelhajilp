export interface PackageImage {
  path: string;
  url: string;
}

export interface Package {
  id: string;
  name: string;
  type: 'UMROH' | 'HAJI';
  description: string;
  price: string;
  dp: number;
  duration: number;
  departureDate: string;
  quota: number;
  remainingQuota: number;
  facilities: string[];
  image: PackageImage;
  additionalImages: PackageImage[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PaginationInfo {
  total: number;
  pages: number;
  page: number;
  limit: number;
}

export interface PackageResponse {
  status: string;
  data: Package[];
  pagination: PaginationInfo;
} 