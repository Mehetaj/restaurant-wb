import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Mock data - will be replaced with real data from API
const recentReservations = [
  {
    id: 1,
    name: "John Doe",
    date: "2024-03-20",
    time: "19:00",
    guests: 4,
    status: "confirmed"
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "2024-03-21",
    time: "20:00",
    guests: 2,
    status: "pending"
  }
];

const recentMessages = [
  {
    id: 1,
    subject: "Reservation Query",
    name: "Alice Johnson",
    email: "alice@example.com",
    date: "2024-03-19",
    read: false
  },
  {
    id: 2,
    subject: "Feedback",
    name: "Bob Wilson",
    email: "bob@example.com",
    date: "2024-03-18",
    read: true
  }
];

export function RecentActivity() {
  return (
    <Tabs defaultValue="reservations" className="w-full">
      <div className="flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="reservations">Reservations</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value="reservations" className="mt-4">
        <div className="space-y-4">
          {recentReservations.map(reservation => (
            <div key={reservation.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
              <div>
                <div className="font-medium">{reservation.name}</div>
                <div className="text-sm text-muted-foreground">
                  {new Date(reservation.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} at {reservation.time} · {reservation.guests} guests
                </div>
              </div>
              <div className={`text-xs px-2 py-1 rounded-full ${reservation.status === 'confirmed' ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500'}`}>
                {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" size="sm" className="w-full mt-4" asChild>
          <Link href="/admin/reservations">
            View all reservations
          </Link>
        </Button>
      </TabsContent>
      
      <TabsContent value="messages" className="mt-4">
        <div className="space-y-4">
          {recentMessages.map(message => (
            <div key={message.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
              <div>
                <div className="font-medium flex items-center gap-2">
                  {message.subject}
                  {!message.read && (
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">
                  From: {message.name} ({message.email})
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                {new Date(message.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" size="sm" className="w-full mt-4" asChild>
          <Link href="/admin/messages">
            View all messages
          </Link>
        </Button>
      </TabsContent>
    </Tabs>
  );
} 