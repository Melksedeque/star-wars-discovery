import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface CardProps {
  title: string;
  subtitle?: string;
  image: string;
  onClick: () => void;
  className?: string;
}

export function Card({ title, subtitle, image, onClick, className }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm cursor-pointer",
        "border border-yellow-500/20 hover:border-yellow-500/40 transition-colors",
        "group flex flex-col",
        className
      )}
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-yellow-500">{title}</h3>
        {subtitle && (
          <p className="mt-1 text-sm text-gray-300">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}