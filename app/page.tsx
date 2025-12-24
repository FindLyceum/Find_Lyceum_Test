"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Send, Sparkles, Shield, Users, Heart, MessageCircle } from "lucide-react"
import { GeometricBackground } from "@/components/geometric-background"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <GeometricBackground />

      {/* Dark gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-warm/10" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-3">
          <div className="glass-strong flex h-10 w-10 items-center justify-center rounded-full animate-pulse-glow">
            <Sparkles className="h-5 w-5 text-accent" />
          </div>
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-accent via-accent-warm to-accent-gold bg-clip-text text-transparent">
              Лицей №27
            </span>
          </div>
        </div>
        <Button
          size="sm"
          className="glass-strong border-accent/30 bg-gradient-to-r from-accent/20 to-accent-warm/20 text-foreground backdrop-blur-xl hover:border-accent/50"
          asChild
        >
          <a href="https://t.me/findLyceum" target="_blank" rel="noopener noreferrer">
            <Send className="mr-2 h-4 w-4" />
            Подписаться
          </a>
        </Button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 px-6 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          {/* Hero Content */}
          <div className="mb-16 text-center">
            <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-accent">
              <Sparkles className="h-4 w-4 animate-twinkle" />С Новым Годом! 2025
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Найди новых друзей в{" "}
              <span className="bg-gradient-to-r from-accent via-accent-warm to-accent-gold bg-clip-text text-transparent">
                Лицее №27
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Telegram-канал для знакомств и общения по интересам среди учеников Лицея №27. Размещай объявления с фото и
              находи того кто тебе нравится!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="glass-strong group gap-2 border-accent/30 bg-gradient-to-r from-accent/30 to-accent-warm/30 text-foreground backdrop-blur-xl hover:border-accent/50 hover:from-accent/40 hover:to-accent-warm/40"
                asChild
              >
                <a href="https://t.me/findLyceum" target="_blank" rel="noopener noreferrer">
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  Присоединиться к каналу
                </a>
              </Button>
              <Button
                size="lg"
                className="glass border-accent/30 bg-transparent text-foreground backdrop-blur-xl hover:border-accent/50"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Разместить объявление
              </Button>
            </div>

            {/* Stats Badge */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-muted-foreground">Новый канал</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-accent" />
                <span className="font-medium text-foreground">Растущее сообщество</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">Строгая модерация</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16 grid gap-6 md:grid-cols-3">
            <Card className="glass group border-accent/20 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/20">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-accent/20 to-accent-warm/20 p-3 backdrop-blur-sm">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Новые знакомства</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  Размещай объявления с фото и текстом. Находи людей для дружбы и совместных
                  увлечений.
                </p>
              </CardContent>
            </Card>

            <Card className="glass group border-accent/20 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/20">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-accent-warm/20 to-accent-gold/20 p-3 backdrop-blur-sm">
                  <Shield className="h-6 w-6 text-accent-warm" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Проверенная модерация</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  Все объявления проходят тщательную модерацию. Безопасная и дружелюбная атмосфера гарантирована.
                </p>
              </CardContent>
            </Card>

            <Card className="glass group border-accent/20 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/20">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-accent-gold/20 to-accent/20 p-3 backdrop-blur-sm">
                  <Users className="h-6 w-6 text-accent-gold" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Только для Лицея №27</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  Закрытое сообщество для учеников нашего лицея. Общайся с теми, кто рядом и разделяет твои интересы.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* How it works */}
          <div className="glass-strong mb-16 rounded-2xl border border-accent/20 p-8 md:p-12">
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Как это работает?</h2>
              <p className="text-lg text-muted-foreground">Простые шаги к новым знакомствам</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-accent-warm/30 text-lg font-bold text-foreground backdrop-blur-sm">
                  1
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Подпишись на канал</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  Присоединяйся к нашему Telegram-каналу и становись частью сообщества
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent-warm/30 to-accent-gold/30 text-lg font-bold text-foreground backdrop-blur-sm">
                  2
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Создай объявление</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  Напиши о себе, добавь фото и описание человека
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent-gold/30 to-accent/30 text-lg font-bold text-foreground backdrop-blur-sm">
                  3
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Находи друзей</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  Общайся с единомышленниками и заводи новые дружеские связи
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-strong rounded-2xl border border-accent/30 p-8 text-center md:p-12">
            <Sparkles className="mx-auto mb-4 h-12 w-12 text-accent animate-float" />
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Начни новый год с новых друзей!</h2>
            <p className="mx-auto mb-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Присоединяйся к каналу прямо сейчас и будь среди первых участников нашего растущего сообщества. Модерация
              работает, атмосфера дружелюбная!
            </p>
            <Button
              size="lg"
              className="glass-strong gap-2 border-accent/30 bg-gradient-to-r from-accent/30 to-accent-gold/30 text-foreground backdrop-blur-xl hover:border-accent/50 hover:from-accent/40 hover:to-accent-gold/40"
              asChild
            >
              <a href="https://t.me/findLyceum" target="_blank" rel="noopener noreferrer">
                <Send className="h-5 w-5" />
                Присоединиться к каналу
              </a>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-16 border-t border-accent/10 px-6 py-8 md:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 Лицей №27. Все объявления проходят модерацию. Безопасное и дружелюбное сообщество.
          </p>
        </div>
      </footer>
    </div>
  )
}
