import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Star, Shield, Tag } from 'lucide-react';
import { Coupon } from '../types';

interface CouponCardProps {
  coupon: Coupon;
}

const CouponCard: React.FC<CouponCardProps> = ({ coupon }) => {
  const discountPercentage = Math.round(((coupon.originalValue - coupon.sellingPrice) / coupon.originalValue) * 100);
  const daysLeft = Math.ceil((new Date(coupon.validUntil).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={coupon.images[0]}
          alt={coupon.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
          {discountPercentage}% OFF
        </div>
        <div 
          className="absolute top-3 right-3 px-2 py-1 rounded-full text-white text-sm font-medium"
          style={{ backgroundColor: coupon.platform.color }}
        >
          {coupon.platform.logo} {coupon.platform.name}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-2">
            {coupon.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {coupon.description}
          </p>
        </div>

        {/* Price Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ₹{coupon.sellingPrice}
            </span>
            <span className="text-lg text-gray-500 line-through">
              ₹{coupon.originalValue}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Tag size={16} className="text-green-500" />
            <span className="text-green-600 font-semibold">
              Save ₹{coupon.originalValue - coupon.sellingPrice}
            </span>
          </div>
        </div>

        {/* Seller Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              {coupon.seller.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{coupon.seller.name}</p>
              <div className="flex items-center space-x-1">
                <Star size={12} className="text-yellow-500 fill-current" />
                <span className="text-xs text-gray-600">{coupon.seller.rating}</span>
                {coupon.seller.isVerified && (
                  <Shield size={12} className="text-blue-500" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Validity */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1 text-gray-600">
            <Calendar size={16} />
            <span className="text-sm">Valid till {new Date(coupon.validUntil).toLocaleDateString()}</span>
          </div>
          <span className={`text-sm font-medium ${daysLeft > 7 ? 'text-green-600' : daysLeft > 3 ? 'text-yellow-600' : 'text-red-600'}`}>
            {daysLeft} days left
          </span>
        </div>

        {/* Action Button */}
        <Link
          to={`/coupon/${coupon.id}`}
          className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CouponCard;