import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="border-b border-blue-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Icon name="Activity" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">LifeTracker</h1>
                <p className="text-xs text-gray-500">ERP System</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">Главная</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Дашборд</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Настройки</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Дела</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Испытания</a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Icon name="Search" className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Bell" className="w-4 h-4" />
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                <Icon name="User" className="w-4 h-4 mr-2" />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Добро пожаловать в
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> LifeTracker</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полная ERP система для управления жизнью и достижения целей
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/70 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Активные дела</CardTitle>
                <Icon name="CheckCircle" className="w-5 h-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">12</div>
              <p className="text-xs text-gray-500 mt-1">+3 за сегодня</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Испытания</CardTitle>
                <Icon name="Target" className="w-5 h-5 text-cyan-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">8</div>
              <p className="text-xs text-gray-500 mt-1">2 завершено</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Прогресс</CardTitle>
                <Icon name="TrendingUp" className="w-5 h-5 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">68%</div>
              <Progress value={68} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Достижения</CardTitle>
                <Icon name="Award" className="w-5 h-5 text-yellow-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">24</div>
              <p className="text-xs text-gray-500 mt-1">Все время</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <Card className="bg-white/70 backdrop-blur-sm border-blue-100 animate-slide-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Zap" className="w-5 h-5 text-blue-600" />
                Быстрые действия
              </CardTitle>
              <CardDescription>Часто используемые функции</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                <Icon name="Plus" className="w-4 h-4 mr-2" />
                Создать новое дело
              </Button>
              <Button variant="outline" className="w-full justify-start border-blue-200 hover:bg-blue-50">
                <Icon name="Calendar" className="w-4 h-4 mr-2" />
                Планировать день
              </Button>
              <Button variant="outline" className="w-full justify-start border-blue-200 hover:bg-blue-50">
                <Icon name="BarChart" className="w-4 h-4 mr-2" />
                Посмотреть аналитику
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-white/70 backdrop-blur-sm border-blue-100 animate-slide-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Clock" className="w-5 h-5 text-blue-600" />
                Последние действия
              </CardTitle>
              <CardDescription>Ваша активность за сегодня</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Завершено дело "Планирование"</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Создано испытание "Спорт"</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Обновлены настройки</span>
              </div>
            </CardContent>
          </Card>

          {/* Goals & Challenges */}
          <Card className="bg-white/70 backdrop-blur-sm border-blue-100 animate-slide-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Target" className="w-5 h-5 text-blue-600" />
                Активные цели
              </CardTitle>
              <CardDescription>Текущие испытания и цели</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Здоровый образ жизни</span>
                  <Badge variant="secondary">85%</Badge>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Изучение React</span>
                  <Badge variant="secondary">60%</Badge>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Финансовые цели</span>
                  <Badge variant="secondary">40%</Badge>
                </div>
                <Progress value={40} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Section */}
        <Card className="mt-8 bg-white/70 backdrop-blur-sm border-blue-100 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="BarChart3" className="w-5 h-5 text-blue-600" />
              Аналитика производительности
            </CardTitle>
            <CardDescription>Ваш прогресс за последний месяц</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">156</div>
                <div className="text-sm text-gray-600">Выполнено дел</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-cyan-600 mb-2">28</div>
                <div className="text-sm text-gray-600">Дней активности</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
                <div className="text-sm text-gray-600">Успешность</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}