"use client";

import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Button, TextField, Box, Divider, FormControl } from '@mui/material';

const CampaignDetail: React.FC = () => {
    // Data dummy
    const campaign = {
        id: 1,
        name: 'Bantu Bencana Banjir',
        location: 'Cilandak, DKI Jakarta',
        date: '26 Juli 2024',
        description: 'Curah hujan yang sedang tinggi-tingginya, membuat beberapa daerah di DKI Jakarta terdampak bencana banjir. Salah satunya daerah Cilandak. Mari bantu warga Cilandak yang terdampak banjir.',
        budget: 99000,
        banner: 'https://via.placeholder.com/600x400',
        media: [
            { url: 'https://via.placeholder.com/150' },
            { url: 'https://via.placeholder.com/150' },
            { url: 'https://via.placeholder.com/150' }
        ],
        detail: 'Jakarta, 27 Juli 2024 — Banjir kembali melanda wilayah Cilandak, Jakarta Selatan, setelah hujan deras mengguyur daerah tersebut sejak semalam. Akibatnya, beberapa titik di Cilandak terendam air setinggi 50-70 cm, mengakibatkan aktivitas warga terganggu dan menyebabkan kerusakan pada sejumlah rumah serta infrastruktur.',
        latestCondition: 'Banjir yang terjadi pagi ini mengakibatkan beberapa ruas jalan utama di Cilandak terendam air, mengakibatkan kemacetan panjang. Warga yang hendak beraktivitas mengalami kesulitan, terutama mereka yang menggunakan kendaraan roda dua. Beberapa kendaraan terlibat mogok karena mesin kemasukan air.',
        impactOnCommunity: 'Ratusan rumah di beberapa kelurahan, seperti Kelurahan Cilandak Barat dan Kelurahan Gandaria Selatan, terdampak banjir. Banyak warga terpaksa mengungsi ke tempat yang lebih tinggi atau ke posko pengungsian sementara yang telah disediakan oleh pemerintah setempat. Selain itu, beberapa fasilitas umum seperti sekolah dan puskesmas juga terendam, mengakibatkan kegiatan belajar mengajar dan layanan kesehatan terganggu.',
        organizer: 'Aktivis Lingkungan Jakarta (ALJ) adalah sebuah lembaga yang berdedikasi untuk membantu masyarakat luas dalam hal sosial dan lingkungan khususnya di wilayah provinsi DKI Jakarta. Kami berkomitmen untuk membantu meningkatkan kesadaran, meningkatkan kualitas hidup masyarakat, dan mempromosikan keberlanjutan. Dengan pengalaman bertahun-tahun dan keahlian di berbagai bidang, kami berusaha memberikan kontribusi positif kepada masyarakat dan lingkungan.'
    };

    const [donationAmount, setDonationAmount] = useState('');

    const handleNominalClick = (amount: number) => {
        setDonationAmount(amount.toString());
    };

    return (
        <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Grid container spacing={4} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <img src={campaign.banner} alt="Campaign" style={{ width: '100%', height: 'auto' }} />
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            {campaign.media.map((media, index) => (
                                <Grid item xs={4} key={index}>
                                    <img src={media.url} alt="Media" style={{ width: '100%', height: 'auto' }} />
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" mb={3} gutterBottom>Campaign &gt; {campaign.name}</Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h4">{campaign.name}</Typography>
                        <Typography variant="h5" sx={{ ml: 2 }}>Rp{campaign.budget}</Typography>
                    </Box>
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>{campaign.location} | {campaign.date}</Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>{campaign.description}</Typography>
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <Typography variant="subtitle1" sx={{ mb: 1 }}>Jumlah Donasi</Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Masukkan jumlah donasi"
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(e.target.value)}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                            {[10000, 50000, 100000].map((amount) => (
                                <Button
                                    key={amount}
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => handleNominalClick(amount)}
                                    sx={{ width: '30%', fontSize: '0.875rem' }}
                                >
                                    {amount.toLocaleString('id-ID')}
                                </Button>
                            ))}
                        </Box>
                    </FormControl>
                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Donasi</Button>
                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h5" gutterBottom>Detail</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Typography variant="body1" gutterBottom>{campaign.detail}</Typography>
                        <Typography variant="body1" gutterBottom>{campaign.latestCondition}</Typography>
                        <Typography variant="body1" gutterBottom>{campaign.impactOnCommunity}</Typography>
                        <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>Tentang Penyelenggara</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Typography variant="body1" gutterBottom>{campaign.organizer}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CampaignDetail;
