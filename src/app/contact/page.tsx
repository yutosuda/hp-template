"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiry_type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS設定（実際の値は環境変数で管理することを推奨）
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_company: formData.company,
          from_email: formData.email,
          from_phone: formData.phone,
          inquiry_type: formData.inquiry_type,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        inquiry_type: '',
        message: ''
      });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* ページヘッダー */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">お問い合わせ</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          ご質問やご相談がございましたら、お気軽にお声がけください。
          専門スタッフが丁寧に対応いたします。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* お問い合わせフォーム */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">お問い合わせフォーム</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">お名前 *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">会社名</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="株式会社○○"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">電話番号</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="03-0000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry_type">お問い合わせ種別</Label>
                  <select
                    id="inquiry_type"
                    name="inquiry_type"
                    value={formData.inquiry_type}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="">選択してください</option>
                    <option value="service_inquiry">サービスについて</option>
                    <option value="quote_request">お見積り依頼</option>
                    <option value="consultation">無料相談</option>
                    <option value="partnership">業務提携について</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">お問い合わせ内容 *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="お問い合わせ内容をご記入ください"
                    rows={6}
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800">
                      お問い合わせありがとうございます。内容を確認の上、担当者よりご連絡いたします。
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-800">
                      送信に失敗しました。お手数ですが、もう一度お試しください。
                    </p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* 連絡先情報 */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">その他の連絡方法</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">電話でのお問い合わせ</h3>
                <p className="text-muted-foreground mb-2">
                  お急ぎの場合は、お電話でもお気軽にお問い合わせください。
                </p>
                <p className="text-lg font-semibold">03-0000-0000</p>
                <p className="text-sm text-muted-foreground">
                  受付時間: 平日 9:00-18:00
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">メールでのお問い合わせ</h3>
                <p className="text-muted-foreground mb-2">
                  直接メールでもお問い合わせいただけます。
                </p>
                <a 
                  href="mailto:info@company.com" 
                  className="text-lg font-semibold text-primary hover:underline"
                >
                  info@company.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-2">所在地</h3>
                <div className="text-muted-foreground">
                  <p>〒100-0001</p>
                  <p>東京都千代田区千代田1-1-1</p>
                  <p>千代田ビル 10階</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">よくあるご質問</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Q. 相談は無料ですか？</h4>
                <p className="text-muted-foreground text-sm">
                  A. はい、初回相談は無料です。お気軽にお問い合わせください。
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Q. 対応可能な業界はありますか？</h4>
                <p className="text-muted-foreground text-sm">
                  A. 製造業、IT業界、サービス業など幅広い業界に対応しています。
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Q. プロジェクトの期間はどのくらいですか？</h4>
                <p className="text-muted-foreground text-sm">
                  A. 内容により異なりますが、3ヶ月〜12ヶ月程度が一般的です。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 