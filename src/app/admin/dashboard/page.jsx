
"use client";
import { useEffect, useState } from 'react';
import Modal from '@/components/Modal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Dashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedBlogId, setSelectedBlogId] = useState(null);
    const [actionType, setActionType] = useState('');

    // Fetch blog posts from the API
    const fetchPosts = async () => {
        try {
            const response = await fetch('/api/allblogs');
            const data = await response.json();
            setBlogs(data.blogs);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle delete post
    const handleDelete = async () => {
        try {
            await fetch(`/api/deleteblog`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: selectedBlogId })
            });
            fetchPosts();
        } catch (error) {
            console.error('Error deleting post:', error);
        }
        setShowDeleteModal(false);
    };

    // Handle edit post
    const handleEdit = (id) => {
        setSelectedBlogId(id);
        setActionType('edit');
        setShowEditModal(true);
    };

    // Confirm and redirect to edit page
    const confirmEdit = () => {
        window.location.href = `/admin/editblog/${selectedBlogId}`;
        setShowEditModal(false);
    };

    const parseDate = (dateString) => {
        const date = new Date(dateString);
        return date.toDateString() + " | " + date.toLocaleTimeString();
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;

    return (
        <div className="container mx-auto px-4 py-8 rounded">
            <div className='flex justify-between'>
            <h1 className="text-3xl font-bold text-left text-accent mb-6">Manage your blogs</h1>
            <Link href="/admin/createblog" className="bg-primary">Add New Blog</Link>
            </div>
            <ul className="space-y-4">
                {blogs.map((blog, index) => (
                    <li key={index} className="relative p-6 bg-[#27272c] rounded shadow-lg border border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between hover:scale-[1.03] transition-all duration-500 group">
                        <div>
                            <h2 className="text-xl font-semibold text-accent mb-2">{blog.title}</h2>
                            <div className="text-white">Date: {parseDate(blog.createdAt)}</div>
                        </div>
                        <div className="mt-4 md:mt-0 flex space-x-4">
                            <button
                                onClick={() => handleEdit(blog._id)}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:scale-105 duration-500"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => {
                                    setSelectedBlogId(blog._id);
                                    setActionType('delete');
                                    setShowDeleteModal(true);
                                }}
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 hover:scale-105 duration-500"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Edit Confirmation Modal */}
            <Modal
                isOpen={showEditModal}
                onClose={() => setShowEditModal(false)}
                onConfirm={confirmEdit}
                title="Confirm Edit"
                message="Are you sure you want to edit this blog post?"
            />

            {/* Delete Confirmation Modal */}
            <Modal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleDelete}
                title="Confirm Delete"
                message="Are you sure you want to delete this blog post?"
            />
        </div>
    );
};

export default Dashboard;
