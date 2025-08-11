import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

interface StatCard {
  title: string;
  value: string;
  bgColor: string;
  textColor: string;
}

interface Message {
  name: string;
  message: string;
  time: string;
  avatar: string;
}

interface Activity {
  title: string;
  category: string;
  participants: string;
  status: string;
}

interface Notice {
  title: string;
  author: string;
  date: string;
  category: string;
}

interface RecentActivity {
  user: string;
  action: string;
  time: string;
}

interface NavigationItem {
  icon: string;
  label: string;
  active?: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false
})
export class DashboardComponent {
  currentUser = 'Linda Adara';
  currentMonth = 'September 2030';

  stats: StatCard[] = [
    { title: 'Students', value: '124,684', bgColor: 'bg-[var(--color-light-blue)]', textColor: 'text-[var(--color-mid-blue)]' },
    { title: 'Instructors', value: '12,379', bgColor: 'bg-[var(--color-oxford-blue)]', textColor: 'text-[var(--color-warm-gray)]' },
    { title: 'Staffs', value: '29,300', bgColor: 'bg-[var(--color-oxford-blue)]', textColor: 'text-[var(--color-warm-gray)]' },
    { title: 'Awards', value: '95,800', bgColor: 'bg-[var(--color-light-blue)]', textColor: 'text-[var(--color-mid-blue)]' }
  ];

  navigationItems: NavigationItem[] = [
    { icon: 'activity', label: 'Dashboard', active: true },
    { icon: 'users', label: 'Teachers' },
    { icon: 'book-open', label: 'Students' },
    { icon: 'calendar', label: 'Classes' },
    { icon: 'dollar-sign', label: 'Finance' },
    { icon: 'bell', label: 'Notice' },
    { icon: 'message-square', label: 'Message' },
    { icon: 'book-open', label: 'Library' }
  ];

  messages: Message[] = [
    { name: 'Dr. Lia Ramirez', message: 'Thank you for the productive call today...', time: '9:20 am', avatar: '👩‍⚕️' },
    { name: 'Ms. Heather Morris', message: 'Looking forward to our project discussion...', time: '10:15 am', avatar: '👩‍🏫' },
    { name: 'Mr. Carl Jenkins', message: 'The quarterly report looks excellent...', time: '11:30 am', avatar: '👨‍💼' },
    { name: 'Officer Dan Brooks', message: 'Security protocols have been updated...', time: '1:45 pm', avatar: '👮‍♂️' },
    { name: 'Ms. Tina Goldberg', message: 'Budget planning meeting scheduled...', time: '2:30 pm', avatar: '👩‍💼' }
  ];

  activities: Activity[] = [
    { title: 'Regional Robotics Champion', category: 'Competition', participants: 'Engineering Team', status: 'recent' },
    { title: 'Won Regional Debate Competition', category: 'Achievement', participants: 'Debate Club', status: 'recent' },
    { title: '3rd Place at Science State Fair', category: 'Competition', participants: 'Science Club', status: 'completed' }
  ];

  notices: Notice[] = [
    { title: 'Math Olympiad Registration Open', author: 'By Principal', date: 'Yesterday', category: 'Academic' },
    { title: 'Yearbook Photo Submissions', author: 'By Principal Committee', date: 'Yesterday', category: 'General' },
    { title: 'Reminder: School Play Auditions This Week', author: 'By Ms Rodriguez', date: '2 days ago', category: 'Events' },
    { title: 'Important Updates: School Uniform Policy', author: 'By Principal', date: '3 days ago', category: 'Policy' }
  ];

  recentActivity: RecentActivity[] = [
    { user: 'Ms. Johnson', action: 'submitted new English Literature Homework', time: 'Today' },
    { user: 'David Lee', action: 'submitted current History Homework', time: 'Today' },
    { user: 'Permission Slip Reminder', action: 'Science Fair Trip', time: 'Today' },
    { user: 'Permission Slip Reminder', action: 'Museum Field Trip', time: 'Today' }
  ];

  agendaItems = [
    { time: '09:00 am', title: 'Homework & Announcement' },
    { time: '10:00 am', title: 'Math Review & Practice' },
    { time: '10:30 am', title: 'Science Experiment & Discussion' }
  ];

  todaySummary = [
    { label: 'Total Students Present', value: '45,214', color: 'text-green-600' },
    { label: 'Total Students Absent', value: '470', color: 'text-orange-500' },
    { label: 'New Registrations', value: '23', color: 'text-blue-600' },
    { label: 'Pending Approvals', value: '12', color: 'text-gray-800' }
  ];

  // Calendar data
  calendarDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  calendarGrid = Array.from({ length: 35 }, (_, i) => {
    const day = i - 6;
    return {
      day: day > 0 && day <= 30 ? day : null,
      isToday: day === 23,
      isCurrentMonth: day > 0 && day <= 30
    };
  });

  // Chart data arrays for rendering
  // attendanceChartData = [65, 80, 45, 90, 70, 85, 60];
  // earningsChartData = Array.from({ length: 12 }, () => Math.random() * 80 + 20);

  constructor() { }

  onNavigationClick(item: NavigationItem): void {
    // Reset all active states
    this.navigationItems.forEach(nav => nav.active = false);
    // Set clicked item as active
    item.active = true;
    console.log('Navigation clicked:', item.label);
  }

  onMessageClick(message: Message): void {
    console.log('Message clicked:', message.name);
  }

  onViewAllClick(section: string): void {
    console.log('View all clicked for:', section);
  }

  onCalendarDayClick(day: number): void {
    if (day) {
      console.log('Calendar day clicked:', day);
    }
  }
  // Doughnut (Students)
public studentsChartData: ChartData<'doughnut'> = {
  labels: ['Boys', 'Girls'],
  datasets: [
    {
      data: [45414, 38600],
      backgroundColor: ['#005ABB', '#F29D4B']
    }
  ]
};

public studentsChartOptions: ChartOptions<'doughnut'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: { color: 'var(--color-oxford-blue)' }
    },
    tooltip: {
      enabled: true,
      backgroundColor: '#FFFFFF',
      titleColor: '#005ABB',
      bodyColor: '#666666',
      borderColor: '#9FC9EB',
      borderWidth: 1,
      callbacks: {
        label: (ctx) => {
          const data = ctx.dataset.data as number[];
          const value = Number(ctx.parsed);
          const total = data.reduce((sum, v) => sum + Number(v), 0);
          const percent = ((value / total) * 100).toFixed(1);
          return `${ctx.label}: ${value.toLocaleString()} (${percent}%)`;
        }
      }
    }
  },
  animation: {
    duration: 8000,
    easing: 'easeOutQuart'
  }
};



  public attendanceChartData: ChartData<'line'> = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [65, 80, 45, 90, 70, 85, 60],
        label: 'Attendance Rate',
        fill: true,
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        tension: 0.3
      }
    ]
  };

  public attendanceChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#1e3a8a'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#1e3a8a'
        }
      },
      y: {
        ticks: {
          color: '#1e3a8a'
        }
      }
    },
    animation: {
      duration: 8000,
      easing: 'easeOutQuart'
    }
  };


  public earningsChartData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [24000, 26000, 21000, 28000, 30000, 27000],
        label: 'Income',
        backgroundColor: '#005ABB'
      },
      {
        data: [12000, 15000, 11000, 14000, 10000, 9000],
        label: 'Expense',
        backgroundColor: '#9FC9EB'
      }
    ]
  };

  public earningsChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#1e3a8a' // Blue text for legend
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#1e3a8a'
        }
      },
      y: {
        ticks: {
          color: '#1e3a8a'
        }
      }
    },
    animation: {
      duration: 8000,
      easing: 'easeOutQuart'
    }
  };
}
