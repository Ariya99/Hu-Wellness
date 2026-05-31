import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { WellnessCard } from "@/components/wellness/WellnessCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Settings, Heart, Activity } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function Profile() {
  const location = useLocation();
  const [profile, setProfile] = useState({
    name: "Ariya Pourmirza",
    email: "ariya@wellnessai.com",
    avatar: "AP",
    joinDate: "2024-01-15",
    bio: "On a journey to better health and wellness!",
    age: 28,
    height: "5'8\"",
    weight: "150 lbs",
    waterGoal: 8,
    sleepGoal: 8,
    stepGoal: 5000,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(profile);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleSave = () => {
    setProfile(editForm);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0 md:pl-24">
      <Navigation />

      <motion.main
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-4xl mx-auto px-4 py-8 md:py-12"
      >
        {/* Profile Header */}
        <motion.div variants={item} className="mb-8">
          <WellnessCard gradient="warm" className="flex items-center justify-between p-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-white">
                {profile.avatar}
              </div>
              <div>
                <h1 className="text-heading-md text-foreground">{profile.name}</h1>
                <p className="text-muted-foreground">{profile.email}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Member since {new Date(profile.joinDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </Button>
          </WellnessCard>
        </motion.div>

        {/* Tabs */}
        <motion.div variants={item}>
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 rounded-2xl bg-muted p-1">
              <TabsTrigger value="personal" className="rounded-xl">
                <User size={18} className="mr-2" />
                Personal
              </TabsTrigger>
              <TabsTrigger value="wellness" className="rounded-xl">
                <Heart size={18} className="mr-2" />
                Wellness
              </TabsTrigger>
              <TabsTrigger value="settings" className="rounded-xl">
                <Settings size={18} className="mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Personal Tab */}
            <TabsContent value="personal" className="space-y-6 mt-6">
              {isEditing ? (
                <WellnessCard gradient="sage" className="p-8 space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      value={editForm.name}
                      onChange={(e) =>
                        setEditForm({ ...editForm, name: e.target.value })
                      }
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={editForm.email}
                      onChange={(e) =>
                        setEditForm({ ...editForm, email: e.target.value })
                      }
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Bio
                    </label>
                    <Textarea
                      value={editForm.bio}
                      onChange={(e) =>
                        setEditForm({ ...editForm, bio: e.target.value })
                      }
                      className="rounded-xl"
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Age
                      </label>
                      <Input
                        type="number"
                        value={editForm.age}
                        onChange={(e) =>
                          setEditForm({ ...editForm, age: parseInt(e.target.value) })
                        }
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Height
                      </label>
                      <Input
                        value={editForm.height}
                        onChange={(e) =>
                          setEditForm({ ...editForm, height: e.target.value })
                        }
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Weight
                    </label>
                    <Input
                      value={editForm.weight}
                      onChange={(e) =>
                        setEditForm({ ...editForm, weight: e.target.value })
                      }
                      className="rounded-xl"
                    />
                  </div>

                  <Button
                    onClick={handleSave}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                  >
                    Save Changes
                  </Button>
                </WellnessCard>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <WellnessCard gradient="lavender">
                    <p className="text-sm text-muted-foreground mb-1">Age</p>
                    <p className="text-2xl font-bold text-foreground">
                      {profile.age} years
                    </p>
                  </WellnessCard>

                  <WellnessCard gradient="sky">
                    <p className="text-sm text-muted-foreground mb-1">Height</p>
                    <p className="text-2xl font-bold text-foreground">
                      {profile.height}
                    </p>
                  </WellnessCard>

                  <WellnessCard gradient="peach">
                    <p className="text-sm text-muted-foreground mb-1">Weight</p>
                    <p className="text-2xl font-bold text-foreground">
                      {profile.weight}
                    </p>
                  </WellnessCard>

                  <WellnessCard gradient="warm">
                    <p className="text-sm text-muted-foreground mb-1">Bio</p>
                    <p className="text-foreground">{profile.bio}</p>
                  </WellnessCard>
                </div>
              )}
            </TabsContent>

            {/* Wellness Goals Tab */}
            <TabsContent value="wellness" className="space-y-6 mt-6">
              {isEditing ? (
                <WellnessCard gradient="sage" className="p-8 space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Daily Water Goal (glasses)
                    </label>
                    <Input
                      type="number"
                      value={editForm.waterGoal}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          waterGoal: parseInt(e.target.value),
                        })
                      }
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Daily Sleep Goal (hours)
                    </label>
                    <Input
                      type="number"
                      value={editForm.sleepGoal}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          sleepGoal: parseInt(e.target.value),
                        })
                      }
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Daily Step Goal
                    </label>
                    <Input
                      type="number"
                      value={editForm.stepGoal}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          stepGoal: parseInt(e.target.value),
                        })
                      }
                      className="rounded-xl"
                    />
                  </div>

                  <Button
                    onClick={handleSave}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                  >
                    Save Goals
                  </Button>
                </WellnessCard>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <WellnessCard gradient="sky" className="text-center">
                    <div className="text-4xl mb-2">💧</div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Water Goal
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {profile.waterGoal} glasses
                    </p>
                  </WellnessCard>

                  <WellnessCard gradient="lavender" className="text-center">
                    <div className="text-4xl mb-2">😴</div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Sleep Goal
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {profile.sleepGoal}h per day
                    </p>
                  </WellnessCard>

                  <WellnessCard gradient="warm" className="text-center">
                    <div className="text-4xl mb-2">🚶</div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Step Goal
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {profile.stepGoal.toLocaleString()}
                    </p>
                  </WellnessCard>
                </div>
              )}
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6 mt-6">
              <WellnessCard gradient="warm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold text-foreground">
                      Email Notifications
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Get daily wellness reminders
                    </p>
                  </div>
                  <div className="w-12 h-6 bg-primary rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
              </WellnessCard>

              <WellnessCard gradient="sage">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold text-foreground">
                      Data Privacy
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Your data is encrypted and secure
                    </p>
                  </div>
                  <div className="text-2xl">🔒</div>
                </div>
              </WellnessCard>

              <div className="space-y-3">
                <Button className="w-full bg-muted text-foreground hover:bg-muted/80 rounded-xl">
                  Export My Data
                </Button>
                <Button className="w-full bg-muted text-foreground hover:bg-muted/80 rounded-xl">
                  Change Password
                </Button>
                <Button className="w-full bg-red-100 text-red-700 hover:bg-red-200 rounded-xl">
                  Delete Account
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.main>
    </div>
  );
}
