'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { User, Check, Star } from 'lucide-react'; // atau icon lain yang kamu pakai

interface StatItem {
  iconName: string;
  value: number;
  label: string;
  suffix?: string;
}

interface StatsContentProps {
  stats: StatItem[];
}

function AnimatedCounter({
  value,
  suffix = '',
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// Pemetaan nama icon ke komponen React
const iconMap = {
  Users: User,
  Check: Check,
  Star: Star,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export function StatsContent({ stats }: StatsContentProps) {
  return (
    <motion.div
      className="grid gap-6 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {stats.map((stat, index) => {
        const IconComponent = iconMap[stat.iconName as keyof typeof iconMap];
        return (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center space-y-2 text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {IconComponent && (
                <IconComponent className="h-12 w-12 text-primary" />
              )}
            </motion.div>
            <motion.h3
              className="text-3xl font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              viewport={{ once: true }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </motion.h3>
            <p className="text-muted-foreground">{stat.label}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
